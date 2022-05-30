using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Vidly.Models;

namespace Vidly.ViewModels
{
    public class RentalFormViewModel
    {
        public string CustomerName { get; set; }
        public string MovieName { get; set; }
        public int MovieId { get; set; }
        public int Id { get; set; }
        public DateTime? DateReturned { get; set; }
    }


}