using Microsoft.AspNetCore.Authorization;
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
                Token = _tokenService.CreateToken(user)
            });
        }

        [HttpPost("Register")]
        public async Task<ActionResult<AccountDTO>> Register(LoginDTO registerUser)
        {
            var userData = await _context.User.FirstOrDefaultAsync(x => x.Username == registerUser.Username);
            if (userData != null) return Ok("User already Registerd");

            var user = new User();
          
            using var hmac = new HMACSHA512();

            user.Username = registerUser.Username.ToLower();
            user.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(registerUser.Password));
            user.PasswordSalt = hmac.Key;
            await _context.User.AddAsync(user);
            await _context.SaveChangesAsync();
            return Ok(new AccountDTO
            {
                Username = user.Username,
                Token = _tokenService.CreateToken(user)
            });
        }
    }
}
