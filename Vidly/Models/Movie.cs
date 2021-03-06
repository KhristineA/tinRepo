using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Vidly.Models
{
    //test
    public class Movie
    {
        public int Id { get; set; }

        [Required]
        [StringLength(255)]
        public string Name { get; set; }

        public Genre Genre { get; set; }


        [Required]
        [Display(Name = "Genre")]
        public byte GenreId { get; set; }

        public DateTime DateAdded { get; set; }

        [Required]
        [Display(Name = "Realease Date")]
        public DateTime ReleaseDate { get; set; }

        [Range(1,20)]
        [Required]
        [Display(Name = "Number in Stock")]
        public byte NumberInStock { get; set; }
        public byte NumberAvailable { get; set; }

    }
}