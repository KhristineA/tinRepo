using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Vidly.Models;

namespace Vidly.ViewModels
{
    public class RentalFormViewModel
    {
        //public int Id { get; set; }
        //public string CustomerName { get; set; }
        //public IEnumerable<RentDetail> RentDetail { get; set; }
        //public RentalFormViewModel()
        //{
        //    Id = 0;
        //}
        //public RentalFormViewModel(RentDetail rentalDetail)
        //{
        //    Id = rentalDetail.RentHeader.RentId;
        //    CustomerName = rentalDetail.RentHeader.Customer.Name;
        //    Movie = rentalDetail.Movie;
        //    DateReturned = rentalDetail.DateReturned;
        //}

        public string CustomerName { get; set; }
        public string MovieName { get; set; }
        public int MovieId { get; set; }
        public int Id { get; set; }
        public DateTime? DateReturned { get; set; }
    }


}