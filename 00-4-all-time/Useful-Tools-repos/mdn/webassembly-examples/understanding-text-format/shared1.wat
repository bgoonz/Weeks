(module
  (import "js" "memory" (memory 1))
  (import "js" "table" (table 1 anyfunc))
  (type $void_to_i32 (func (result i32)))
  (func (export "doIt") (result i32)

   (i32.store (i32.const 0) (i32.const 42))  ;; store 42 at address 0

   (call_indirect $void_to_i32 (i32.const 0)))
)
