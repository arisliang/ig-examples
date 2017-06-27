using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace igexamples.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }

        public User(int id, string name)
        {
            this.Id = id;
            this.Username = name;
        }
    }
}
