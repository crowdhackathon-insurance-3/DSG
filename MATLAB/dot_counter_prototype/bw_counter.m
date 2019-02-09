%% read image, convert to grayscale, convert to bw, extract histogram 
% imhist( im2bw(rgb2gray(imread('0.png')), 0.5));
%{
1) Read image
2) Convert to grayscale
3) Convert to BW
4) Extract histogram
5) Subtract white from black (BLACK - WHITE)
%}
image_0 = rgb2gray(imread('0.png'));  
image_1 = rgb2gray(imread('1.png'));
image_2 = rgb2gray(imread('2.png'));
image_3 = rgb2gray(imread('3.png'));

hist0 = imhist( im2bw(rgb2gray(imread('0.png')), 0.5));
hist1 = imhist( im2bw(rgb2gray(imread('1.png')), 0.5));
hist2 = imhist( im2bw(rgb2gray(imread('2.png')), 0.5));
hist3 = imhist( im2bw(rgb2gray(imread('3.png')), 0.5));

% for demo, I implemented a basic diff. Greater diff means more black than white
Diffs = [hist0(1) - hist0(2), 
		 hist1(1) - hist1(2), 
		 hist2(1) - hist2(2),
		 hist3(1) - hist3(2)]