%% Crowdpolicy Insurtech 3.0 ----------------------------------------------
%{
	This script reads rgb images from the patterns we are developing,
	converts them to grayscale, to BW and extracts features for classification.

	Features: BW pixeldiff, circle count, skew and skew deriv. min/max
%}
function [featureMatrix] = extract_features(varargin)

for imageCount = 1:nargin
	%% data input -------------------------------------------------------------
	rgbImage 	= imread(varargin{imageCount});
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

	%% export in matrix
	featureMatrix(imageCount, 1) = imageCount;
	featureMatrix(imageCount, 2) = diffs;
	featureMatrix(imageCount, 3) = numberOfCircles;
	featureMatrix(imageCount, 4) = skEwMAX;
	featureMatrix(imageCount, 5) = diffSkEwMAX;
	featureMatrix(imageCount, 6) = skEwMIN;
	featureMatrix(imageCount, 7) = diffSkEwMIN;
end