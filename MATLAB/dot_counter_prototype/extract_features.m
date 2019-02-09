%% Crowdpolicy Insurtech 3.0 ----------------------------------------------
%{
	This script reads rgb images from the patterns we are developing,
	converts them to grayscale, to BW and extracts features for classification.
	Adding features BW pixeldiff, circle count
%}
function [diffs, numberOfCircles, skEwMAX, diffSkEwMAX, skEwMIN, diffSkEwMIN] = extract_features(x)
%% data input -------------------------------------------------------------
rgbImage 	= imread(x);
grayImage 	= rgb2gray(rgbImage);  
BWImage 	= im2bw(grayImage);

% Features ----------------------------------------------------------------

%% DIFFS
histogramBW = imhist(BWImage);
diffs = histogramBW(1) - histogramBW(2)

%% find circles
binaryImage = rgbImage(:,:,1) < 200;
numberOfCircles = length(regionprops(binaryImage, 'Centroid', 'Area'))

%% skew / diff_skew / Max-Min
skEw = skewness(BWImage);
skEwMAX = max(skEw)
diffSkEwMAX = max(diff(skEw))
skEwMIN = min(skEw)
diffSkEwMIN = min(diff(skEw))