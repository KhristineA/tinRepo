using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Vidly.Models;

namespace Vidly.Dtos
{
    public class RentalDto
    {
        public int CustomerId { get; set; }
        public List<int> MovieIds { get; set; }
    }

    public class RentalHeaderDto
    {
        public int RentId { get; set; }
        public int CustomerId { get; set; }
        public CustomerDto Customer { get; set; }
        public DateTime DateRented { get; set; }
       public List<RentDetail> RentDetail { get; set; } = new List<RentDetail>();
    }

    public class RentalDetailDto
    {
        public int Id { get; set; }
        public int RentId { get; set; }
        public RentalHeaderDto RentalHeader { get; set; }
        public int MovieId { get; set; }
        public MovieDto Movie { get; set; }
        public DateTime? DateReturned { get; set; }
    }
}