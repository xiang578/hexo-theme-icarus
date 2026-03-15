/**
 * Webmastodon comment JSX component.
 * @module layout/comment/webmastodon
 */
const { Component, Fragment } = require('inferno');

class WebmentionTimeline extends Component {

    render() {
        const { helper } = this.props;
        const sectionId = 'network-responses';

        return <Fragment>
            <section class="webmention-section">
                <h2 id={sectionId}>
                    <a href={`#${sectionId}`} class="headerlink" title="网络回响"></a>
                    网络回响
                </h2>
                <div class="webmention-timeline"></div>
                <script src={helper.url_for('/js/webmention-timeline.js')}></script>
            </section>
        </Fragment>
    }
}


module.exports = WebmentionTimeline;
