# Local storage

- local storage means your storing your data in the browser and after closing the browser your data would not be deleted  (~5Mb)

# Session storage
- session storage stores data temporarily,data will be deleted after tab is closed
/
# Cookies
- Cookies also stores data,It saves data in the browser property called cookies It is basically for light data or less data.Data will go to server when reloaded. (~4Kb)


# JSON.stringify()
- JSON.stringify() is a JavaScript method used to convert a JavaScript object or value into a JSON-formatted string. It is commonly used to send data over a network or store it in localStorage. You can also use it with optional parameters to format the output or filter specific properties.

- we cannot store array in localStorage,so we store it in JSON.stringify(),so to use it as an array we use JSON.parse()