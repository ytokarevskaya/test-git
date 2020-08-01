 var arr = [5, 5, 4, 5]

 function foo(a) {
   for (var b = 0; b < a.length; b++)
     if (a[b] !== a[0]) return !1;
   return !0
 };

 console.log(foo(arr));