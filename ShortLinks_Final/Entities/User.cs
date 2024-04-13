namespace ShortLinks_Final.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public DateTime DateRegistered { get; set; } =  DateTime.UtcNow;
        public List<Links> Links { get; set; }
    }
}
