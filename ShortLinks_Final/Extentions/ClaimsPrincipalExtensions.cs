using System.Security.Claims;

namespace ShortLinks_Final.Extentions
{
    public static class ClaimsPrincipalExtensions
    {
        public static string GetUsername(this ClaimsPrincipal User)
        {
            return User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }
    }
}
