var imageUrlArray = ['image_1.png','image_2.png','image_3.png','image_4.png'];
var imageTitles =['Spring in Oakland', 'Summer in China', 'Autumn in Holland', 'Winter in Finland'];
var carouselIndex = -1;

var imageTitle, imageMain, imagePreviewBack, imagePreviewMain, imagePreviewNext;

// Executes on page fully loaded.
function OnPageLoaded()
{
    imageTitle = document.getElementById('imageTitle');
    imageMain = document.getElementById('imageMain');
    imagePreviewBack = document.getElementById("previewBack");
    imagePreviewMain = document.getElementById("previewMain");
    imagePreviewNext = document.getElementById("previewNext");

    // Run GotoNextImage to automaticly setup images and title.
    GotoNextImage();
}

// Opens main image in a new tab.
function OpenImage()
{
    window.open(imageUrlArray[carouselIndex]);
}

// Moves the carousel towards the next index.
function GotoNextImage()
{
    // Set new preview back image.
    imagePreviewBack.src = SetElementSource((carouselIndex == -1) ? imageUrlArray.length -1 : carouselIndex);

    // Set new preview, main and title.
    carouselIndex = GetNextIndex(carouselIndex, false);
    imageMain.src = SetElementSource(carouselIndex);
    imagePreviewMain.src = SetElementSource(carouselIndex);
    imageTitle.innerHTML = SetImageTitle(carouselIndex);

    // Set new preview next image.
    var next = GetNextIndex(carouselIndex, false);
    imagePreviewNext.src = SetElementSource(next);
}

// Moves the carousel towards the previous index.
function GotoPreviousImage()
{
    // Set the next preview image.
    imagePreviewNext.src = SetElementSource(carouselIndex);

    // Set new main and preview image.
    carouselIndex = GetPreviousIndex(carouselIndex, true);
    imageMain.src = SetElementSource(carouselIndex);
    imagePreviewMain.src = SetElementSource(carouselIndex);
    imageTitle.innerHTML = SetImageTitle(carouselIndex);

    // Set new preview back image.
    var previous = GetPreviousIndex(carouselIndex);
    imagePreviewBack.src = SetElementSource(previous);

}

// Gets the next index within the array.
function GetNextIndex(index, clampToMaxValue)
{
    if(index >= imageUrlArray.length - 1)
    {
        return(clampToMaxValue) ? imageUrlArray.length - 1 : 0;
    }
    else
    {
        return index + 1;
    }
}

// Gets the previous index within the array.
function GetPreviousIndex(index)
{
    if(index <= 0)
    {
        return imageUrlArray.length - 1;
    }
    else
    {
        return index - 1;
    }
}

// Sets the image of a given element.
function SetElementSource(index)
{
    return imageUrlArray[index];
}

// Sets the title of a given index.
function SetImageTitle(index)
{
    return imageTitles[index] + " (" + (index + 1) + "/" + imageUrlArray.length + ")";
}