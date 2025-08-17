# Tailwind : 
Tailwind CSS is a utility-first CSS framework that helps you build modern websites faster and more consistently by using predefined class names directly in your HTML or JSX.

# Important Point : 
By default Tailwind uses a mobile first breakpoint system. 
<br>

```bash 

<p class="text-white md:text-green sm:text-red">This is a simple paragraph</p>


// Here "text-white" css will be applied to smallest screen(mobile) 

// "text-green" css will be applied to medium and its above size screen. 

// "text-green" css will be applied to small screen and its above size screen. 
```

# How to apply custom css : 
We can apply our custom css inside square bracket. 
<br>

```bash 
    <div class="bg-slate-500">
        <div class="bg-[#1334e3] p-[2px]"></div>
    </div>
```

