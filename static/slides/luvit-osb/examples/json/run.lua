local JSON = require('json')
local value = JSON.parse([[
{
  "author": "Brandon Philips <brandon@ifup.org>",
  "name": "luvit - node's Ziggy Stardust",
  "description": "a talk about luvit"
}
]])

local json = JSON.stringify(value, {beautify=true,indent_string="  "});
print(json)
