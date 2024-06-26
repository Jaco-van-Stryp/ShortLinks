﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ShortLinks_Final.Data;
using ShortLinks_Final.DTOs;
using ShortLinks_Final.Entities;
using ShortLinks_Final.Interfaces;
using System.Security.Cryptography;
using System.Text;

namespace ShortLinks_Final.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class UserController : Controller
    {
        private readonly DataContext _context;
        private readonly ITokenService _tokenService;


        public UserController(DataContext context, ITokenService tokenService)
        {
            _context = context;
            _tokenService = tokenService;
        }

        [HttpPost("login")]
        public async Task<ActionResult<AccountDTO>> Login(LoginDTO loginUser)
        {
            var user = await _context.User.FirstOrDefaultAsync(x => x.Username == loginUser.Username);
            if (user == null) return Unauthorized("Invalid Username or Password");
            using var hmac = new HMACSHA512(user.PasswordSalt);

            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginUser.Password));

            for (int i = 0; i < computedHash.Length; i++)
            {
                if (computedHash[i] != user.PasswordHash[i]) return Unauthorized("Invalid Username or Password");
            }

            return Ok(new AccountDTO
            {
                Username = user.Username,
                Name = user.Name,
                Surname = user.Surname,
                Token = _tokenService.CreateToken(user)
            });
        }

        [HttpPost("Register")]
        public async Task<ActionResult<AccountDTO>> Register(LoginDTO registerUser)
        {
            if (registerUser.Name == null || registerUser.Password == null || registerUser.Surname == null || registerUser.Username == null || registerUser.Name == "" || registerUser.Username == "" || registerUser.Password == "" || registerUser.Surname == "" || registerUser.Password.Length < 8 || registerUser.Password.Length > 100) return StatusCode(403, "Please Complete All Fields");
            var userData = await _context.User.FirstOrDefaultAsync(x => x.Username == registerUser.Username);
            if (userData != null) return Ok("User already Registered");

            var user = new User();

            using var hmac = new HMACSHA512();

            user.Username = registerUser.Username.ToLower();
            user.Name = registerUser.Name;
            user.Surname = registerUser.Surname;
            user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerUser.Password));
            user.PasswordSalt = hmac.Key;
            await _context.User.AddAsync(user);
            await _context.SaveChangesAsync();
            return Ok(new AccountDTO
            {
                Username = user.Username,
                Surname = user.Surname,
                Name = user.Name,
                Token = _tokenService.CreateToken(user)
            });
        }
    }
}
