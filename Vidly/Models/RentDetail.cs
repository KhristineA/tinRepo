using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace Vidly.Models
{
    public class RentDetail
    {
        [Key]
        public int Id { get; set; }
        public int RentId { get; set; }
        //public RentHeader RentHeader { get; set; }
        [Column("Movie_Id")]
        public int MovieId { get; set; }
        public Movie Movie { get; set; }
        public DateTime? DateReturned { get; set; }
    }
}