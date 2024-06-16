import React from "react";
import { NavLink } from "react-router-dom";
const Service = () => {
  const cards = [
    {
      id: 1,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid"
          width="85"
          height="70"
          viewBox="0 0 85 70">
          {" "}
          <path
            d="M83.340,66.666 L70.391,66.666 C69.474,66.666 68.730,65.920 68.730,65.000 C68.730,64.079 69.474,63.333 70.391,63.333 L81.680,63.333 L81.680,20.000 L78.359,20.000 L78.359,58.333 C78.359,59.254 77.616,60.000 76.699,60.000 L49.119,60.000 C46.979,60.000 45.116,61.389 44.425,63.333 L55.449,63.333 C56.366,63.333 57.109,64.079 57.109,65.000 C57.109,65.920 56.366,66.666 55.449,66.666 L30.381,66.666 L30.381,68.333 C30.381,69.254 29.637,70.000 28.721,70.000 L22.080,70.000 C21.163,70.000 20.420,69.254 20.420,68.333 L20.420,66.666 L1.660,66.666 C0.743,66.666 -0.000,65.920 -0.000,65.000 L-0.000,18.333 C-0.000,17.413 0.743,16.667 1.660,16.667 L6.641,16.667 L6.641,11.667 C6.641,10.746 7.384,10.000 8.301,10.000 L17.871,10.000 L24.019,0.742 C24.327,0.278 24.845,-0.000 25.400,-0.000 C25.956,-0.000 26.474,0.278 26.782,0.742 L32.929,10.000 L35.859,10.000 C38.572,10.000 40.984,11.313 42.500,13.339 C44.016,11.313 46.428,10.000 49.141,10.000 L76.699,10.000 C77.616,10.000 78.359,10.746 78.359,11.667 L78.359,16.667 L83.340,16.667 C84.257,16.667 85.000,17.413 85.000,18.333 L85.000,65.000 C85.000,65.920 84.257,66.666 83.340,66.666 ZM20.420,52.725 C16.342,51.670 13.779,49.374 13.779,46.666 C13.779,45.746 14.523,45.000 15.439,45.000 C16.356,45.000 17.100,45.746 17.100,46.666 C17.100,47.466 18.238,48.488 20.231,49.188 L17.233,13.333 L9.961,13.333 L9.961,56.666 L20.420,56.666 L20.420,52.725 ZM20.420,60.000 L8.301,60.000 C7.384,60.000 6.641,59.254 6.641,58.333 L6.641,20.000 L3.320,20.000 L3.320,63.333 L20.420,63.333 L20.420,60.000 ZM30.381,63.333 L40.533,63.333 C39.847,61.393 38.002,60.000 35.838,60.000 L30.381,60.000 L30.381,63.333 ZM23.740,66.666 L27.060,66.666 L27.060,53.268 C26.514,53.310 25.960,53.333 25.400,53.333 C24.841,53.333 24.287,53.310 23.740,53.268 L23.740,66.666 ZM25.400,4.671 L20.462,12.107 L23.623,49.909 C24.205,49.967 24.797,50.000 25.400,50.000 C26.003,50.000 26.596,49.967 27.178,49.909 L30.338,12.107 L25.400,4.671 ZM40.840,18.333 C40.840,15.576 38.606,13.333 35.859,13.333 L33.568,13.333 L30.570,49.188 C32.563,48.487 33.701,47.466 33.701,46.666 C33.701,45.746 34.445,45.000 35.361,45.000 C36.278,45.000 37.021,45.746 37.021,46.666 C37.021,49.374 34.459,51.670 30.381,52.725 L30.381,56.666 L35.838,56.666 C37.715,56.666 39.448,57.296 40.840,58.354 L40.840,18.333 ZM75.039,13.333 L49.141,13.333 C46.394,13.333 44.160,15.576 44.160,18.333 L44.160,58.332 C45.552,57.286 47.274,56.666 49.119,56.666 L75.039,56.666 L75.039,13.333 ZM47.978,25.000 C47.978,24.079 48.722,23.333 49.639,23.333 L51.584,23.333 C54.169,23.333 56.598,22.323 58.426,20.488 C58.737,20.176 59.159,20.000 59.600,20.000 C60.040,20.000 60.462,20.176 60.773,20.488 C62.601,22.323 65.031,23.333 67.615,23.333 L69.560,23.333 C70.477,23.333 71.221,24.079 71.221,25.000 L71.221,29.648 C71.221,37.731 67.221,45.235 60.521,49.720 C60.242,49.907 59.921,50.000 59.600,50.000 C59.279,50.000 58.957,49.907 58.679,49.720 C51.979,45.235 47.978,37.731 47.978,29.648 L47.978,25.000 ZM51.299,29.648 C51.299,36.235 54.382,42.377 59.600,46.293 C64.817,42.377 67.900,36.235 67.900,29.648 L67.900,26.667 L67.615,26.667 C64.672,26.667 61.878,25.691 59.600,23.891 C57.321,25.691 54.528,26.667 51.584,26.667 L51.299,26.667 L51.299,29.648 ZM59.600,30.000 C62.346,30.000 64.580,32.243 64.580,35.000 C64.580,37.757 62.346,40.000 59.600,40.000 C56.853,40.000 54.619,37.757 54.619,35.000 C54.619,32.243 56.853,30.000 59.600,30.000 ZM59.600,36.667 C60.515,36.667 61.260,35.919 61.260,35.000 C61.260,34.081 60.515,33.333 59.600,33.333 C58.684,33.333 57.939,34.081 57.939,35.000 C57.939,35.919 58.684,36.667 59.600,36.667 ZM62.920,63.333 C63.837,63.333 64.580,64.079 64.580,65.000 C64.580,65.920 63.837,66.666 62.920,66.666 C62.003,66.666 61.260,65.920 61.260,65.000 C61.260,64.079 62.003,63.333 62.920,63.333 Z"
            className="cls-1"
          />{" "}
        </svg>
      ),
      title: "Vastu",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididuesdeentiut labore <br /> etesde dolore magna aliquapspendisse and the gravida.",
    },
    {
      id: 2,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid"
          width="58"
          height="69"
          viewBox="0 0 58 69">
          {" "}
          <path
            d="M30.362,67.641 C30.362,68.390 29.757,69.000 29.012,69.000 C28.269,69.000 27.663,68.390 27.663,67.641 C27.663,66.893 28.269,66.283 29.012,66.283 C29.757,66.283 30.362,66.893 30.362,67.641 ZM0.674,67.641 L0.674,65.923 C0.674,56.868 6.774,51.929 9.444,50.317 C13.072,48.129 16.968,46.474 21.042,45.387 L21.042,43.200 C20.363,42.596 19.742,41.910 19.193,41.144 C17.577,38.891 16.259,36.449 15.265,33.869 C14.355,33.744 13.524,33.161 13.096,32.249 C12.688,31.380 9.860,26.112 9.427,25.174 C8.328,22.797 9.764,20.448 11.584,19.693 C11.887,19.566 12.199,19.473 12.516,19.420 C12.221,18.206 12.072,16.957 12.072,15.688 C12.072,7.038 19.061,-0.000 27.651,-0.000 C29.161,-0.000 30.591,0.581 31.677,1.637 C31.688,1.648 31.707,1.648 31.718,1.637 C32.805,0.581 34.235,-0.000 35.744,-0.000 C41.583,-0.000 46.333,4.783 46.333,10.662 L46.333,13.136 C46.333,15.266 46.042,17.362 45.469,19.394 C45.793,19.447 46.116,19.533 46.423,19.672 C48.662,20.693 49.537,23.217 48.580,25.154 C48.123,26.080 45.319,31.360 44.911,32.229 C44.483,33.140 43.652,33.724 42.743,33.849 C41.749,36.434 40.428,38.883 38.809,41.141 C38.260,41.908 37.638,42.595 36.958,43.200 L36.958,45.387 C41.032,46.474 44.928,48.129 48.555,50.316 C51.226,51.929 57.326,56.867 57.326,65.923 L57.326,67.641 C57.326,68.391 56.722,69.000 55.977,69.000 L35.084,69.000 C35.083,69.000 35.083,69.000 35.082,69.000 C34.309,69.000 33.685,68.341 33.736,67.550 C33.783,66.829 34.411,66.283 35.129,66.283 L54.628,66.283 C54.628,60.548 51.770,55.424 47.167,52.647 C43.919,50.687 40.439,49.180 36.804,48.159 C36.077,51.828 32.854,54.602 29.000,54.602 C25.146,54.602 21.923,51.828 21.196,48.159 C17.562,49.180 14.081,50.687 10.832,52.647 C6.230,55.424 3.372,60.390 3.372,66.283 L22.944,66.283 C23.718,66.283 24.341,66.945 24.288,67.736 C24.239,68.456 23.612,69.000 22.895,69.000 L2.023,69.000 C1.278,69.000 0.674,68.391 0.674,67.641 L0.674,67.641 ZM14.775,15.896 C14.899,15.749 16.760,13.446 19.964,13.446 C21.561,13.446 23.096,14.007 24.311,15.007 C25.431,15.928 26.857,16.435 28.326,16.435 C31.802,16.435 34.587,13.619 34.665,10.025 C34.682,9.287 35.280,8.697 36.014,8.697 C36.747,8.696 37.346,9.286 37.362,10.025 C37.401,11.759 38.328,13.263 39.782,13.949 C41.212,14.625 42.409,15.647 43.286,16.898 C43.518,15.663 43.635,14.406 43.635,13.136 L43.635,10.662 C43.635,6.281 40.095,2.716 35.744,2.716 C34.937,2.716 34.173,3.027 33.592,3.592 C32.530,4.624 30.866,4.624 29.803,3.592 C29.223,3.027 28.458,2.716 27.651,2.716 C20.548,2.716 14.707,8.460 14.775,15.896 ZM34.260,45.009 C31.067,46.527 27.377,46.702 23.740,45.010 L23.740,46.588 C23.740,49.509 26.099,51.886 29.000,51.886 C31.901,51.886 34.260,49.509 34.260,46.588 L34.260,45.009 ZM36.622,39.552 C38.295,37.218 39.622,34.663 40.561,31.956 C40.726,31.481 41.353,30.763 42.414,31.183 C42.915,30.110 45.733,24.863 46.141,23.993 C46.452,23.331 46.076,22.469 45.369,22.173 C44.969,22.005 44.527,22.035 44.139,22.235 C43.302,22.665 42.266,22.157 42.160,21.225 C41.917,19.110 40.555,17.315 38.637,16.409 C37.667,15.951 36.840,15.280 36.195,14.457 C35.789,15.192 35.263,15.854 34.684,16.482 C32.124,19.261 26.772,20.496 22.605,17.111 C20.979,15.790 18.562,15.870 17.070,17.394 C16.259,18.222 15.781,19.342 15.781,20.485 L15.781,21.019 C15.786,22.017 14.733,22.683 13.827,22.234 C13.452,22.047 13.024,22.039 12.638,22.193 C12.026,22.438 11.504,23.235 11.866,24.014 C12.270,24.885 15.150,30.211 15.577,31.183 C16.765,30.767 17.322,31.621 17.445,31.976 C18.386,34.676 19.710,37.226 21.380,39.555 C23.176,42.059 25.953,43.496 29.000,43.495 C32.047,43.495 34.825,42.058 36.622,39.552 L36.622,39.552 ZM58.000,8.149 L58.000,1.358 C58.000,0.608 57.396,-0.000 56.651,-0.000 L49.907,-0.000 C49.162,-0.000 48.558,0.608 48.558,1.358 C48.558,2.108 49.162,2.716 49.907,2.716 L55.302,2.716 L55.302,8.149 C55.302,8.899 55.906,9.508 56.651,9.508 C57.396,9.508 58.000,8.899 58.000,8.149 ZM58.000,45.230 L58.000,38.439 C58.000,37.689 57.396,37.081 56.651,37.081 C55.906,37.081 55.302,37.689 55.302,38.439 L55.302,43.872 L49.907,43.872 C49.162,43.872 48.558,44.480 48.558,45.230 C48.558,45.980 49.162,46.588 49.907,46.588 L56.651,46.588 C57.396,46.588 58.000,45.980 58.000,45.230 ZM2.698,8.149 L2.698,2.716 L8.093,2.716 C8.838,2.716 9.442,2.108 9.442,1.358 C9.442,0.608 8.838,-0.000 8.093,-0.000 L1.349,-0.000 C0.604,-0.000 0.000,0.608 0.000,1.358 L0.000,8.149 C0.000,8.899 0.604,9.508 1.349,9.508 C2.094,9.508 2.698,8.899 2.698,8.149 ZM9.442,45.230 C9.442,44.480 8.838,43.872 8.093,43.872 L2.698,43.872 L2.698,38.439 C2.698,37.689 2.094,37.081 1.349,37.081 C0.604,37.081 0.000,37.689 0.000,38.439 L0.000,45.230 C0.000,45.980 0.604,46.588 1.349,46.588 L8.093,46.588 C8.838,46.588 9.442,45.980 9.442,45.230 Z"
            className="cls-1"
          />{" "}
        </svg>
      ),
      title: "Astrology",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididuesdeentiut labore <br /> etesde dolore magna aliquapspendisse and the gravida.",
    },

    {
      id: 3,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid"
          width="71"
          height="71"
          viewBox="0 0 71 71">
          {" "}
          <path
            d="M60.602,60.602 C53.897,67.307 44.982,71.000 35.500,71.000 C28.999,71.000 22.640,69.226 17.111,65.871 C16.265,65.358 15.429,64.802 14.626,64.218 C14.153,63.873 14.049,63.209 14.393,62.736 C14.738,62.262 15.402,62.158 15.875,62.503 C16.630,63.052 17.416,63.575 18.211,64.058 C23.409,67.211 29.387,68.878 35.500,68.878 C44.416,68.878 52.798,65.406 59.102,59.102 C65.407,52.798 68.878,44.416 68.878,35.500 C68.878,26.584 65.407,18.202 59.102,11.898 C52.798,5.593 44.416,2.121 35.500,2.121 C26.584,2.121 18.202,5.593 11.898,11.898 C5.593,18.202 2.121,26.584 2.121,35.500 C2.121,44.187 5.441,52.414 11.469,58.665 C11.876,59.087 11.864,59.759 11.442,60.165 C11.020,60.572 10.349,60.560 9.942,60.138 C3.531,53.489 -0.000,44.739 -0.000,35.500 C-0.000,26.017 3.693,17.103 10.398,10.398 C17.103,3.693 26.018,-0.000 35.500,-0.000 C44.982,-0.000 53.897,3.693 60.602,10.398 C67.307,17.103 71.000,26.017 71.000,35.500 C71.000,44.982 67.307,53.897 60.602,60.602 ZM27.588,8.676 C27.440,8.109 27.780,7.530 28.347,7.382 C32.783,6.227 37.443,6.129 41.922,7.090 C55.258,9.953 65.084,22.126 65.084,35.761 C65.084,51.930 51.930,65.084 35.760,65.084 C32.479,65.084 29.202,64.534 26.104,63.450 C20.792,61.592 16.067,58.180 12.613,53.740 C11.753,52.635 11.028,51.463 10.291,50.277 C9.858,49.580 9.529,49.050 9.243,48.273 C8.954,47.485 8.554,46.733 8.260,45.943 C7.053,42.691 6.437,39.229 6.437,35.761 C6.437,30.049 8.124,24.405 11.254,19.652 C14.116,15.305 18.131,11.754 22.798,9.450 C23.324,9.191 23.960,9.407 24.219,9.932 C24.478,10.457 24.263,11.094 23.738,11.353 C19.362,13.512 15.651,16.809 12.979,20.897 L25.467,20.897 L32.871,8.713 C31.523,8.856 30.188,9.095 28.882,9.435 C28.314,9.583 27.736,9.243 27.588,8.676 ZM38.344,8.681 L45.767,20.897 L58.532,20.897 C54.114,14.153 46.785,9.481 38.344,8.681 ZM59.662,23.139 C59.631,23.084 59.570,23.019 59.456,23.019 L47.056,23.019 L53.462,33.560 L59.658,23.378 C59.717,23.280 59.693,23.194 59.662,23.139 ZM62.963,35.761 C62.963,32.094 62.232,28.595 60.911,25.400 L54.703,35.602 L60.985,45.939 C62.259,42.793 62.963,39.358 62.963,35.761 ZM59.779,48.271 C59.809,48.216 59.834,48.130 59.774,48.033 L53.461,37.643 L46.920,48.391 L59.573,48.391 C59.687,48.391 59.748,48.326 59.779,48.271 ZM35.617,62.667 C35.678,62.667 35.762,62.647 35.819,62.553 L41.687,52.910 C41.991,52.410 42.644,52.251 43.144,52.556 C43.645,52.860 43.804,53.513 43.499,54.013 L38.116,62.859 C46.699,62.120 54.156,57.378 58.605,50.513 L28.089,50.513 L35.416,62.553 C35.473,62.647 35.557,62.667 35.617,62.667 ZM33.102,62.832 L25.605,50.513 L12.917,50.513 C17.313,57.297 24.646,62.008 33.102,62.832 ZM11.675,48.391 L24.314,48.391 L17.774,37.643 L11.476,48.007 C11.541,48.136 11.608,48.264 11.675,48.391 ZM10.491,25.676 C9.219,28.863 8.558,32.279 8.558,35.761 C8.558,39.250 9.220,42.587 10.422,45.655 L16.531,35.602 L10.491,25.676 ZM11.778,23.019 C11.756,23.019 11.736,23.023 11.718,23.028 C11.664,23.129 11.610,23.231 11.557,23.333 C11.563,23.348 11.567,23.362 11.577,23.378 L17.772,33.559 L24.178,23.019 L11.778,23.019 ZM19.014,35.601 L26.798,48.391 L44.477,48.391 L52.220,35.601 L44.574,23.019 L26.660,23.019 L19.014,35.601 ZM27.950,20.897 L43.285,20.897 L35.819,8.612 C35.806,8.590 35.791,8.573 35.775,8.559 C35.770,8.559 35.765,8.558 35.760,8.558 C35.659,8.558 35.557,8.562 35.455,8.563 C35.441,8.577 35.427,8.592 35.415,8.612 L27.950,20.897 ZM45.214,37.193 L37.193,45.214 C36.726,45.681 36.113,45.914 35.500,45.914 C34.887,45.914 34.274,45.681 33.807,45.214 L25.786,37.193 C24.852,36.259 24.852,34.740 25.786,33.806 L33.807,25.785 C34.740,24.852 36.259,24.852 37.193,25.785 L45.214,33.806 C46.148,34.740 46.148,36.259 45.214,37.193 ZM43.714,35.307 L35.693,27.285 C35.640,27.232 35.570,27.206 35.500,27.206 C35.430,27.206 35.360,27.232 35.307,27.285 L27.286,35.307 C27.179,35.413 27.179,35.586 27.286,35.693 L35.307,43.714 C35.413,43.821 35.587,43.821 35.693,43.714 L43.714,35.693 C43.821,35.586 43.821,35.413 43.714,35.307 ZM35.500,39.262 C33.426,39.262 31.738,37.574 31.738,35.500 C31.738,33.425 33.426,31.737 35.500,31.737 C37.574,31.737 39.262,33.425 39.262,35.500 C39.262,37.574 37.574,39.262 35.500,39.262 ZM35.500,33.859 C34.595,33.859 33.859,34.595 33.859,35.500 C33.859,36.404 34.595,37.140 35.500,37.140 C36.405,37.140 37.141,36.404 37.141,35.500 C37.141,34.595 36.405,33.859 35.500,33.859 Z"
            className="cls-1"
          />{" "}
        </svg>
      ),
      title: "Vedic Courses",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididuesdeentiut labore <br /> etesde dolore magna aliquapspendisse and the gravida.",
    },

    {
      id: 4,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          preserveAspectRatio="xMidYMid"
          width="70"
          height="70"
          viewBox="0 0 70 70">
          {" "}
          <path
            d="M70.000,67.742 L70.000,70.000 L-0.000,70.000 L-0.000,67.742 L10.161,67.742 L10.161,49.677 L7.903,49.677 L7.903,42.903 L12.419,42.903 L12.419,38.684 C12.419,36.677 13.766,34.891 15.695,34.341 L20.322,33.021 L20.322,31.003 C18.941,29.761 18.064,27.967 18.064,25.967 L18.064,23.710 C18.064,19.973 21.103,16.935 24.839,16.935 C28.575,16.935 31.613,19.973 31.613,23.710 L31.613,25.967 C31.613,27.968 30.737,29.762 29.355,31.003 L29.355,33.020 L33.983,34.341 C35.814,34.864 37.107,36.505 37.233,38.387 L43.565,38.387 L49.624,32.327 C47.025,31.379 45.161,28.890 45.161,25.967 L45.161,23.710 C45.161,19.973 48.199,16.935 51.935,16.935 C55.671,16.935 58.710,19.973 58.710,23.710 L58.710,25.967 C58.710,27.939 57.858,29.710 56.510,30.949 C57.866,31.656 58.710,33.034 58.710,34.569 L58.710,36.129 L63.226,36.129 L63.226,50.806 C63.226,54.742 60.330,58.006 56.560,58.602 L57.473,67.742 L70.000,67.742 ZM52.957,67.742 L55.204,67.742 L54.301,58.709 L52.054,58.709 L52.957,67.742 ZM44.032,67.742 L50.688,67.742 L49.785,58.709 L44.032,58.709 L44.032,67.742 ZM36.560,67.742 L35.431,65.484 L18.762,65.484 L17.633,67.742 L36.560,67.742 ZM12.419,51.935 L15.806,51.935 L15.806,54.193 L12.419,54.193 L12.419,67.742 L15.108,67.742 L17.366,63.225 L36.827,63.225 L39.085,67.742 L41.774,67.742 L41.774,54.193 L18.064,54.193 L18.064,51.935 L41.774,51.935 L41.774,49.677 L12.419,49.677 L12.419,51.935 ZM10.161,45.161 L10.161,47.419 L45.161,47.419 L45.161,45.161 L10.161,45.161 ZM29.355,23.710 C29.355,21.219 27.329,19.193 24.839,19.193 C22.348,19.193 20.322,21.219 20.322,23.710 L20.322,25.967 C20.322,28.458 22.348,30.484 24.839,30.484 C27.329,30.484 29.355,28.458 29.355,25.967 L29.355,23.710 ZM22.581,32.347 L22.581,33.559 C22.861,33.991 23.639,35.000 24.839,35.000 C26.039,35.000 26.817,33.991 27.097,33.559 L27.097,32.347 C26.389,32.597 25.631,32.742 24.839,32.742 C24.046,32.742 23.288,32.597 22.581,32.347 ZM33.363,36.512 L28.711,35.183 C28.057,36.037 26.782,37.258 24.839,37.258 C22.895,37.258 21.621,36.037 20.966,35.184 L16.315,36.513 C15.352,36.788 14.677,37.680 14.677,38.684 L14.677,42.902 L30.692,42.902 C30.565,42.547 30.484,42.170 30.484,41.773 C30.484,39.906 32.004,38.386 33.871,38.386 L34.951,38.386 C34.831,37.511 34.228,36.759 33.363,36.512 ZM44.500,40.645 L33.871,40.645 C33.248,40.645 32.742,41.151 32.742,41.774 C32.742,42.397 33.248,42.903 33.871,42.903 L45.823,42.903 L53.823,34.903 C54.059,34.667 54.193,34.341 54.193,34.008 C54.193,33.309 53.626,32.742 52.928,32.742 C52.595,32.742 52.268,32.876 52.032,33.112 L44.500,40.645 ZM56.452,23.710 C56.452,21.219 54.426,19.193 51.935,19.193 C49.445,19.193 47.419,21.219 47.419,23.710 L47.419,25.967 C47.419,28.458 49.445,30.484 51.935,30.484 C54.426,30.484 56.452,28.458 56.452,25.967 L56.452,23.710 ZM56.452,34.569 C56.452,34.487 56.429,34.413 56.419,34.334 C56.342,35.144 55.998,35.921 55.420,36.499 L47.419,44.500 L47.419,49.677 L44.032,49.677 L44.032,51.935 L53.064,51.935 C54.932,51.935 56.452,50.416 56.452,48.548 L56.452,34.569 ZM60.968,50.806 L60.968,38.387 L58.710,38.387 L58.710,48.548 C58.710,51.661 56.177,54.193 53.064,54.193 L44.032,54.193 L44.032,56.451 L55.323,56.451 C58.435,56.451 60.968,53.919 60.968,50.806 ZM35.000,18.216 L35.000,11.290 L27.097,11.290 L27.097,-0.000 L54.193,-0.000 L54.193,11.290 L43.312,11.290 L35.000,18.216 ZM51.935,2.258 L29.355,2.258 L29.355,9.032 L37.258,9.032 L37.258,13.396 L42.495,9.032 L51.935,9.032 L51.935,2.258 ZM36.129,4.516 L45.161,4.516 L45.161,6.774 L36.129,6.774 L36.129,4.516 ZM49.677,6.774 L47.419,6.774 L47.419,4.516 L49.677,4.516 L49.677,6.774 ZM31.613,4.516 L33.871,4.516 L33.871,6.774 L31.613,6.774 L31.613,4.516 Z"
            className="cls-1"
          />{" "}
        </svg>
      ),
      title: "Gems Stone",
      description:
        "Consectetur adipiscing elit, sed do eiusmod tempor incididuesdeentiut labore <br /> etesde dolore magna aliquapspendisse and the gravida.",
    },

  ];
  return (
    <>
      
      <section
        className="as_service_wrapper as_padderTop80 as_padderBottom80"
        id="service">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h1 className="as_heading as_heading_center">our services</h1>
              <span>
                <img
                  src="data:img/png;base64,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"
                  alt=""
                />
              </span>
              <p className="as_font14 as_padderTop20 as_padderBottom20">
                Consectetur adipiscing elit, sed do eiusmod tempor
                incididuesdeentiut labore <br />
                etesde dolore magna aliquapspendisse and the gravida.
              </p>
            </div>
          </div>

          <div className="row as_verticle_center">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="row">
                {cards.map((card,index) => (
                  <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" key={index}>
                    <div className="as_service_box text-center" key={card.id}>
                      <span className="as_icon">{card.svg}</span>

                      <h4 className="as_subheading">{card.title}</h4>
                      <p className="as_paddingBottom10">{card.description}</p>

                      <NavLink to={`/detail/${card.id}`} className="as_link">
                        Read more{" "}
                        <i
                          className="fa-solid fa-arrow-right mx-2"
                          style={{ marginTop: "6px" }}></i>
                      </NavLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;