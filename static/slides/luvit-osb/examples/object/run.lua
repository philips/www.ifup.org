local Object = require('core').Object
local Rectangle = Object:extend()
function Rectangle:initialize(w, h)
  self.w = w
  self.h = h
end
function Rectangle:getArea()
  return self.w * self.h
end

local rect = Rectangle:new(3, 4)
p(rect:getArea())
