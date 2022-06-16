import * as React from "react";

const SvgElefante = (props) => (
  <svg
    width={50}
    height={42}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#elefante_svg__a)" d="M0 0h50v41.767H0z" />
    <defs>
      <pattern
        id="elefante_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#elefante_svg__b" transform="scale(.002 .0024)" />
      </pattern>
      <image
        id="elefante_svg__b"
        width={498}
        height={416}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfIAAAGgCAYAAABR1+UsAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAXIaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQzNTIsIDIwMjAvMDEvMzAtMTU6NTA6MzggICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDYtMTRUMjI6MTI6NTIrMDE6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA2LTE0VDIyOjEzOjUxKzAxOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA2LTE0VDIyOjEzOjUxKzAxOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyZmRkMGUxOC02Y2VjLTlkNGQtODViMi0zNTViNDBmYmUyODMiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo2NWQ3ZGI2Zi03MzZiLWM5NDUtOWY1Ny05NjJlN2M3OTg0MjAiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyNjU2ODg2My1iODFkLTY5NDctYmIyYS0yODYzMTE3NGM4MWIiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjI2NTY4ODYzLWI4MWQtNjk0Ny1iYjJhLTI4NjMxMTc0YzgxYiIgc3RFdnQ6d2hlbj0iMjAyMi0wNi0xNFQyMjoxMjo1MiswMTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIxLjEgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDoyZmRkMGUxOC02Y2VjLTlkNGQtODViMi0zNTViNDBmYmUyODMiIHN0RXZ0OndoZW49IjIwMjItMDYtMTRUMjI6MTM6NTErMDE6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyMS4xIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9y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"
      />
    </defs>
  </svg>
);

export default SvgElefante;
