import yaml

def load_arxiv_cite():

    arxiv_cite_source = '_data/arxivSources.yaml'

    with open(arxiv_cite_source, 'r') as f:
        arxiv_cite = yaml.safe_load(f)
    
    for arxiv in arxiv_cite:
        arxiv['plugin'] = 'cite_arxiv.py'
        arxiv['file'] = 'arxivSources.yaml'
        arxiv['publisher'] = "Arxiv Preprint"

    return arxiv_cite

__all__ = ['load_arxiv_cite']