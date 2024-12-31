using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ActionConstraints;
using System.Text.Json;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public ActionResult<Student[]> Get()
        {
            try
            {
                return Ok(DBMockStudents.students.ToArray());
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Student))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult Get(int id)
        {

            try
            {
                Student value = DBMockStudents.students.FirstOrDefault(stu => stu.Id == id);
                if (value == null)
                {
                    return NotFound($"stuednt with id {id} was not found in the get by id action!");
                }
                return Ok(value);
            }
            catch (Exception e)
            {
                return StatusCode(StatusCodes.Status400BadRequest, e.Message);
            }
        }

        [HttpPost]
        [ProducesResponseType(StatusCodes.Status201Created, Type = typeof(Student))]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public IActionResult Post([FromBody] Student value)
        {
            try
            {
                if (value == null)
                {
                    return BadRequest();
                }
                else if (value.Id != 0)
                {
                    return StatusCode(StatusCodes.Status500InternalServerError);
                }

                value.Id = DBMockStudents.students.Max(stu => stu.Id) + 1;
                DBMockStudents.students.Add(value);


                return CreatedAtAction(nameof(Get), new { id = value.Id }, value);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult Put(int id, [FromBody] Student value)
        {
            try
            {
                if (value == null || value.Id != id)
                {
                    return BadRequest();
                }
                Student stu2Update = DBMockStudents.students.FirstOrDefault(stu => stu.Id == id);
                if (stu2Update == null)
                {
                    return NotFound($"studnt with id {id} was not found in the PUT action!");
                }

                stu2Update.Name = value.Name;
                stu2Update.Grade = value.Grade;

                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult Delete(int id) {
            try
            {
                if (id == 0)
                {
                    return BadRequest();
                }
                Student stu2Del = DBMockStudents.students.FirstOrDefault(stu => stu.Id == id);
                if (stu2Del == null)
                {
                    return NotFound($"studnt with id {id} was not found in the Delete action!");
                }

                DBMockStudents.students.Remove(stu2Del);

                return NoContent();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

    }
}
