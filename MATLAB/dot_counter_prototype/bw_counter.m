%% read image, convert to grayscale, extract histogram 
plot(imhist(rgb2gray(imread('test.png'))))