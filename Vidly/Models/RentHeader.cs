using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Vidly.Models
{
    public class RentHeader
    {
        [Key]
        public int RentId { get; set; }
        [Column("Customer_Id")]
        public int CustomerId { get; set; }
        public Customer Customer { get; set; }
        public DateTime DateRented { get; set; }
        public List<RentDetail> RentDetail { get; set; } = new List<RentDetail>();
    }
}