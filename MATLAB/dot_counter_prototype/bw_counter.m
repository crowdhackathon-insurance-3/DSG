%% read image, convert to grayscale, convert to bw, extract histogram 
% imhist( im2bw(rgb2gray(imread('0.png')), 0.5));

image_0 = rgb2gray(imread('0.png'));  
image_1 = rgb2gray(imread('1.png'));
image_2 = rgb2gray(imread('2.png'));
image_3 = rgb2gray(imread('3.png'));

hist0 = imhist( im2bw(rgb2gray(imread('0.png')), 0.5));
hist1 = imhist( im2bw(rgb2gray(imread('1.png')), 0.5));
hist2 = imhist( im2bw(rgb2gray(imread('2.png')), 0.5));
hist3 = imhist( im2bw(rgb2gray(imread('3.png')), 0.5));