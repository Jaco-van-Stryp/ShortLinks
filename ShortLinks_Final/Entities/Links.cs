using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShortLinks_Final.Entities
{
    public class Links
    {
        public int Id { get; set; }
        [Required]
        public string LongURL { get; set; }
        [Required]
        public string ShortURL { get; set; }
        public DateTime DateCreated { get; set; } = DateTime.UtcNow;
        public int Interactions { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}
