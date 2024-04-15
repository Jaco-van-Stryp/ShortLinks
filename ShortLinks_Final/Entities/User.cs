using System.ComponentModel.DataAnnotations;

namespace ShortLinks_Final.Entities
{
    public class User
    {
        public int Id { get; set; }
        [Required]
        public string Username { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Surname { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime DateRegistered { get; set; } = DateTime.UtcNow;
        public List<Links> Links { get; set; }
    }
}
