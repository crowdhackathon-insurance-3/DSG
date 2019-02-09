%% Crowdpolicy Insurtech 3.0
%{
	This script reads rgb images from the patterns we are developing,
	converts them to grayscale, to BW and extracts features for classification.
%}

%% data input 
rgbImage 	= imread('0.png');
grayImage 	= rgb2gray(rgbImage);  
BWImage 	= im2bw(grayImage);

% ---  Features ---

%% DIFFS feature
histogramBW = imhist(BWImage);
diffs = histogramBW(1) - histogramBW(2)

%% find circles
binaryImage = rgbImage(:,:,1) < 200;
numberOfCircles = length(regionprops(binaryImage, 'Centroid', 'Area'))

