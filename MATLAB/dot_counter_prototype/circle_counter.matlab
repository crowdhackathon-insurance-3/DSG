
clc;    	% Clear the command window.
close all;  % Close all figures (except those of imtool.)
clear;  	% Erase all existing variables.
workspace;  % Make sure the workspace panel is showing.
format longg;
format compact;
fontSize = 20;
rgbImage = imread('0.png');

% Get centroid correctly via regionprops
binaryImage = rgbImage(:,:,1) < 200;
measurements = regionprops(binaryImage, 'Centroid', 'Area');
numberOfCircles = length(measurements);
allAreas = [measurements.Area]
[counts values] = hist(allAreas);

