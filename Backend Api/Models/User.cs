﻿

using System.ComponentModel.DataAnnotations;

namespace BigReact.Models
{
    public class User
    {

        [Key]
        public int UserId { get; set; }
        public string? UserName { get; set; }

        public string? UserEmail { get; set; }
        public string? Password { get; set; }

        public string? Role { get; set; }

    }
}
