%% Crowdpolicy Insurtech 3.0 ----------------------------------------------
%{
	This script reads rgb images from the patterns we are developing,
	converts them to grayscale, to BW and extracts features for classification.

	Features: BW pixeldiff, circle count, skew and skew deriv. min/max
%}
function [raw_features, normalized_features] = extract_features(varargin)

for imageCount = 1:nargin
for imageCount = 1:nargin % ikr... 

	%% data input -------------------------------------------------------------
	rgbImage 	= imread(varargin{imageCount});
	grayImage 	= rgb2gray(rgbImage);  
	BWImage 	= im2bw(grayImage);

	% Features ----------------------------------------------------------------
	%% DIFFS
	histogramBW = imhist(BWImage);
	diffs = histogramBW(1) - histogramBW(2)

	%% find circles
	binaryImage 	= rgbImage(:,:,1) < 200;
	numberOfCircles = length(regionprops(binaryImage, 'Centroid', 'Area'))

	%% skew / diff_skew / Max-Min
	skEw 	= skewness(BWImage);
	skEwMAX = max(skEw)
	diffSkEwMAX = max(diff(skEw))
	skEwMIN = min(skEw)
	diffSkEwMIN = min(diff(skEw))
	% Features ----------------------------------------------------------------

	%% raw
	raw_features(imageCount, 1) = imageCount;
	raw_features(imageCount, 2) = diffs;
	raw_features(imageCount, 3) = numberOfCircles;
	raw_features(imageCount, 4) = skEwMAX;
	raw_features(imageCount, 5) = diffSkEwMAX;
	raw_features(imageCount, 6) = skEwMIN;
	raw_features(imageCount, 7) = diffSkEwMIN;

	%% normalized (standarized)
	normalized_features(imageCount, 1) = imageCount;
	normalized_features(imageCount, 2) = mat2gray(diffs, [0 1]);
	normalized_features(imageCount, 3) = mat2gray(numberOfCircles, [0 1]);
	normalized_features(imageCount, 4) = mat2gray(skEwMAX, [0 1]);
	normalized_features(imageCount, 5) = mat2gray(diffSkEwMAX, [0 1]);
	normalized_features(imageCount, 6) = mat2gray(skEwMIN, [0 1]);
	normalized_features(imageCount, 7) = mat2gray(diffSkEwMIN, [0 1]);

end % sorry for this :(