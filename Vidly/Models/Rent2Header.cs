using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Vidly.Models
{
    public class Rent2Header
    {
        [Key]
        public int RentId { get; set; }
        public byte Customer_Id { get; set; }
        public Customer Customer { get; set; }
        public DateTime DateRented { get; set; }
        public List<Rent2Detail> RentDetail { get; set; } = new List<Rent2Detail>();
    }
}