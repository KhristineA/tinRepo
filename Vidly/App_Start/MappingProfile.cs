using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Vidly.Dtos;
using Vidly.Models;

namespace Vidly.App_Start
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            //Domain to Dto
            Mapper.CreateMap<Customer, CustomerDto>();
            Mapper.CreateMap<Movie, MovieDto>();
            Mapper.CreateMap<MembershipType, MembershipTypeDto>();
            Mapper.CreateMap<Genre, GenreDto>();
            Mapper.CreateMap<Rental, RentalDto>();
            Mapper.CreateMap<RentHeader, RentalDto>();
            Mapper.CreateMap<Rent2Header, RentalDto>();
            Mapper.CreateMap<RentHeader, RentalHeaderDto>();
            Mapper.CreateMap<RentDetail, RentalDetailDto>();
            Mapper.CreateMap<RentalDetailDto, RentDetail>();

            //Dto to Domain
            Mapper.CreateMap<CustomerDto, Customer>()
                .ForMember(c => c.Id, opt => opt.Ignore());
            Mapper.CreateMap<MovieDto, Movie>()
                .ForMember(m => m.Id, opt => opt.Ignore());
            Mapper.CreateMap<RentalDto, Rental>()
                .ForMember(r => r.Id, opt => opt.Ignore());
            Mapper.CreateMap<RentalDto, RentHeader>()
                .ForMember(r => r.RentId, opt => opt.Ignore());
        }
    }
}