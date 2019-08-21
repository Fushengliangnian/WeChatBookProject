var 
  book,
  urlPath,  
  rendition,
  displayed;

book = ePub(urlPath);
rendition = book.renderTo("area", {width: 600, height: 400});
displayed = rendition.displayed();

