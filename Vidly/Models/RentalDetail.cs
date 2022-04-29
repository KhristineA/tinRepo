using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Vidly.Models
{
    public class RentalDetail
    {
        public int Id { get; set; }
        public int RentalId { get; set; }
        public RentalHeader RentalHeader { get; set; }
        public Movie Movie { get; set; }
        public DateTime? DateReturned { get; set; }
    }
}