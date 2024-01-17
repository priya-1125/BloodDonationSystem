using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Models;

    public class DonorContext : DbContext
    {
        public DonorContext (DbContextOptions<DonorContext> options)
            : base(options)
        {
        }

        public DbSet<Models.Donor> Donor { get; set; } = default!;
    }
