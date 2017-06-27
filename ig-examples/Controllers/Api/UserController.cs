using igexamples.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace igexamples.Controllers.Api
{
    [Route("api/User")]
    public class UserController : Controller
    {
        [Route("Users")]
        public IActionResult Users()
        {
            var users = new List<User>();
            var user = new User(1, "User 1");
            users.Add(user);
            user = new User(2, "User 2");
            users.Add(user);
            user = new User(3, "User3");
            users.Add(user);

            return Json(users);
        }
    }
}
