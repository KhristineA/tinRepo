using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Vidly.Models
{
    public class Rent2Detail
    {
        [Key]
        public int Id { get; set; }
        public int RentId { get; set; }
        public Rent2Header RentHeader { get; set; }
        public byte Movie_Id { get; set; }
        public Movie Movie { get; set; }
        public DateTime? DateReturned { get; set; }
    }
}