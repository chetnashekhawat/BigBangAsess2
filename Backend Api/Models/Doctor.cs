using System.ComponentModel.DataAnnotations;

namespace BigReact.Models
{
    public class Doctor
    {

        [Key]
        public int DoctorId { get; set; }
        public string? Name { get; set; }
        public string? Specialization { get; set; }
        public string? Email { get; set; }
        public string? PhoneNumber { get; set; }

        public string Status { get; set; } = "Active";

    }
}
