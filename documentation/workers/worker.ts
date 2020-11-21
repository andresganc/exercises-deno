
self.onmessage = async ( e:MessageEvent ) => {
    const { filename } = e.data;
    const text = await Deno.readTextFile(filename);
    console.log(text);
    self.close();  
};