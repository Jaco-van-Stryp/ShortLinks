using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using ShortLinks_Final.Data;
using ShortLinks_Final.DTOs;
using ShortLinks_Final.Entities;
using ShortLinks_Final.Extentions;

namespace ShortLinks_Final.Controllers
{
    [ApiController]
    [Route("api/Links")]

    public class LinksController : Controller
    {
        private readonly DataContext _context;
        public LinksController(DataContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpPost("CreateShortURL")]
        public async Task<ActionResult> CreateShortURL(URLDTO url)
        {
            var user = await _context.User.Include(l => l.Links).FirstOrDefaultAsync(x => x.Username == User.GetUsername());
            if (user == null) return Unauthorized("Please login with a valid user");
            if (user.Links.Count >= 5) return StatusCode(426, "Short Link Limit Reached");
            if (user.Links.Exists(x => x.ShortURL == url.ShortURL) == true) return StatusCode(409, "Short URL Already Exists");
            Links link = new Links
            {
                LongURL = url.LongURL,
                ShortURL = url.ShortURL,
            };
            user.Links.Add(link);
            await _context.SaveChangesAsync();
            return Ok();
        }

        [HttpGet("GetLongURL/{shortLink}")]
        public async Task<ActionResult> GetLongURL(string shortLink)
        {
            var link = await _context.Links.FirstOrDefaultAsync(l => l.ShortURL == shortLink);
            if (link == null) return NotFound();
            link.Interactions = link.Interactions + 1;
            _context.Links.Update(link);
            await _context.SaveChangesAsync();

            return Ok(new URLDTO
            {
                ID = link.Id,
                LongURL = link.LongURL,
                ShortURL = link.ShortURL,
                Interactions = 0
            });
        }

        [Authorize]
        [HttpGet("GetLinksForUser")]
        public async Task<ActionResult> GetLinksForUser()
        {
            var user = await _context.User.Include(l => l.Links).FirstOrDefaultAsync(x => x.Username == User.GetUsername());
            if (user == null) return NotFound();
            List<URLDTO> links = new List<URLDTO>();
            foreach (var link in user.Links)
            {
                links.Add(new URLDTO
                {
                    ID = link.Id,
                    LongURL = link.LongURL,
                    ShortURL = link.ShortURL,
                    Interactions = link.Interactions,
                });
            }
            return Ok(links);
        }

        [Authorize]
        [HttpDelete("DeleteShortURL/{shortURL}")]
        public async Task<ActionResult> DeleteURL(string shortURL)
        {
            var user = await _context.User.Include(l => l.Links).FirstOrDefaultAsync(x => x.Username == User.GetUsername());
            if (user == null) return Unauthorized("You are not a registered member");
            var link = user.Links.SingleOrDefault(x => x.ShortURL == shortURL);
            if (link == null) return NotFound("The link does not exist");
            user.Links.Remove(link);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
