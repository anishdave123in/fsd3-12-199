# file System (FS Module)
- Fs module directly comunicate to OS rather then browser  the common operation on a file or folder are -
1. file=>write File, read File, append File
2. Folder=> mkdir/md  | rmdir/rm | readdir
3. File metadata=> stat/lstart/rstart
4. Watch=> watch, unwatch
5. Stream => readStream(), writeStream()
 

 All function are promise so it must be call with await keyword .
  ## CRUD
  assume we are making a cart related project

  1. user can add any product (id,name,price,qty)into cart
  2. user can see all the items of cart
  3. user can remove item from cart
  4. user can also update quantity of product
  5. all the items should be stored after termination of project 

