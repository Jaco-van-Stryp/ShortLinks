namespace ShortLinks_Final.DTOs
{
    public class URLDTO
    {
        public int ID { get; set; }
        public string LongURL { get; set; }
        public string ShortURL { get; set; }
        public int? Interactions { get; set; }
    }
}
