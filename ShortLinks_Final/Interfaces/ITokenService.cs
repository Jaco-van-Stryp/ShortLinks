using ShortLinks_Final.Entities;

namespace ShortLinks_Final.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(User user);
    }
}
