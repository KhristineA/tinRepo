using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Vidly.Dtos
{
    public class Rental2Dto
    {
        public class RentalHeaderDto
        {
            public int RentId { get; set; }
            public byte Customer_Id { get; set; }
            public CustomerDto Customer { get; set; }
            public DateTime DateRented { get; set; }
            //public List<RentDetail> RentDetail { get; set; } = new List<RentDetail>();
        }
    }
}