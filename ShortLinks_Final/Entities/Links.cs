namespace ShortLinks_Final.Entities
{
    public class Links
    {
        public int Id { get; set; }
        public string LongURL { get; set; }
        public string ShortURL{ get; set; }
        public int Interactions { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
    }
}
