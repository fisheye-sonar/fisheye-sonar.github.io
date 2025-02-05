# fisheye-sonar.github.io

# Adding to the website

Example code below for all of the common additions.
The areeas that need input are marked with !!! at the start and end.

## Adding a news item

    <dl class="dl-horizontal">
        <dt>!!!DATE!!!</dt>
        <dd>
            !!!INFO!!!
        </dd>
    </dl>

## Adding a newsletter

Upload the new newsletter to `./newsletters` and a thumbnail of the newsletters first page to `./newsletters/thumbnails`.

change the iframe  
`<iframe src="./newsletters/!!!NEW_NEWSLETTER!!!.pdf" width="100%" height="1200px"></iframe>`

and move the previous iframe to a new thumbnail

```
<div class="thumbnail">
            <a href="./newsletters/!!!PENULTIMATE_NEWSLETTER!!!.pdf" download>
                <img src="./newsletters/thumbnails/!!!PENULTIMATE_NEWSLETTER!!!.png" alt="Newsletter !!!" width="100%">
            </a>
            <p>Issue !!!: !!! Febuary !!!</p>
</div>

```

## Adding a publication

upload a thumbnail image to `./publications`. Set an id, this needs to be unique to the page, it is used for hiding and showing the bibtex box.

```
<div class="publication-box">
    <img src="publications/!!!PUBLICATIONTHUMBNAIL!!!" style="max-width: 200px;" alt="Image"
        class="publication-image">
    <div class="publication-text">
        <li id="!!!UNIQUEID!!!">
            <b>!!!TITLE!!!/b>
            <br>
            <i>!!!AUTHORLIST!!!</i>
            <br>
            <i>!!!VENUE!!!</i>
            <br>
            !!!ABSTRACT!!!
            <br>
            <a href="!!!PROJECTPAGELINK!!!"><img class="inline-icon" style="height:1em;vertical-align:middle;"
                    src="./assets/link.svg" /></a>&nbsp;
            <a href="!!!ARXIVLINK!!!"><img class="inline-icon"
                    style="height:1em;vertical-align:middle;" src="./assets/arxiv.svg" /></a>&nbsp;
            <a href="!!!GITHUBLINK!!!"><img class="inline-icon"
                    style="height:1em;vertical-align:middle;" src="./assets/github.svg" /></a>&nbsp;
            <a class="togglebib" href="javascript:togglebib('!!!UNIQUEID!!!')"><img class="inline-icon"
                    style="height:1em;vertical-align:middle;" src="./assets/bibtex.svg" /></a>
            <p class="bib">
                !!!BIBTEX TEXT!!!
            </p>
        </li>
    </div>

</div>
```

## Adding a team member

Upload a <b>square<b> headshot to `./team/headshots`.
Add:

```

<div class="responsive-cell-block wk-desk-3 wk-mobile-12 wk-tab-4 wk-ipadp-4 team-card-container">
    <div class="team-card">
        <div class="team-img-wrapper">
            <img class="team-img" src="./team/headshots/!!!HEADSHOTIMAGE!!!">
        </div>
        <div class="team-card-content">
            <p class="text-blk name">
                !!!NAME!!!
            </p>
            <p class="text-blk position">
                !!!JOBROLE!!!

            </p>
            <p class="text-blk institution">
                !!!AFFILIATION!!!
                <span style="float:right;">
                    <a href="!!!WEBPAGE!!!"><i class="text-blk readmore">Read More</i>
                        <i class="arrow right"></i></a>
                </span>
            </p>
        </div>
    </div>
</div>
```

If they donot have a personal website to be linked to, a page can be added to `./team`

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>!!!NAME!!!</title>
    <link rel="stylesheet" href="../styles.css">
</head>

<body>
    <div class="personel_container">
        <img src="../team/headshots/!!!HEADSHOTIMAGE!!!" alt="!!!NAME!!!">
        <div class="personel_container-info">
            <p>!!!NAME!!!</p>
            <p>!!!!ROLE!!!</p>
            <p>!!!INSTITION!!!</p>
        </div>
    </div>
    <div class="personel_container-text">
        !!!BIO OR OTHER INFO!!!
    </div>
</body>

</html>

</html>
```
