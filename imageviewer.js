var imageUrlArray = ['image_1.png','image_2.png','image_3.png','image_4.png'];
var imageTitles =['Spring in Oakland', 'Summer in China', 'Winter in Finland', 'Autmn in Holland'];
var carouselIndex = 0;

var imageMain, imagePreviewBack, imagePreviewMain, imagePreviewNext;

// Executes on page fully loaded.
function OnPageLoaded()
{
    imageMain = document.getElementById('imageMain');
    imagePreviewBack = document.getElementById("previewBack");
    imagePreviewMain = document.getElementById("previewMain");
    imagePreviewNext = document.getElementById("previewNext");
}

// Gets the next image within the array.
function GotoNextImage()
{
    // Set new preview back image.
    imagePreviewBack.src = SetElementSource(carouselIndex);

    // Set new main and preview image.
    carouselIndex = GetNextIndex(carouselIndex, false);
    imageMain.src = SetElementSource(carouselIndex);
    imagePreviewMain.src = SetElementSource(carouselIndex);

    // Set new preview next image.
    var next = GetNextIndex(carouselIndex, false);
    imagePreviewNext.src = SetElementSource(next);
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

// Sets the image of a given element.
function SetElementSource(index)
{
    return imageUrlArray[index];
}