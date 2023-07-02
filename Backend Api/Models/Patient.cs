using System.ComponentModel.DataAnnotations;

namespace BigReact.Models
{
    public class Patient
    {
        [Key]
        public int PatientId { get; set; }
        public string ?Name { get; set; }
        public int? Age { get; set; }
        public string Status { get; set; } = "Active";
        public string? Gender { get; set; }
    }
}
