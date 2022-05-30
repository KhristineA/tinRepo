using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Vidly.Models
{
    public class RentalHeader
    {
        public int Id { get; set; }
        public int Customer_Id { get; set; }
        public Customer Customer { get; set; }
        public DateTime DateRented { get; set; }
        public List<RentalDetail> RentalDetails { get; set; } = new List<RentalDetail>();
    }
}