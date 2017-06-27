using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using igexamples.Models;

namespace ig_examples.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }

        public IActionResult Users()
        {
            ViewData["Message"] = "User List";

            return View();
        }

        public IActionResult Products()
        {
            // https://www.igniteui.com/grid/overview
            ViewData["Message"] = "Product List";
            return View();
        }

        public IActionResult Error()
        {
            return View();
        }
    }
}
