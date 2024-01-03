const Tag = require('../models/tag');

class TagController {

    async create(req, res) {
        const tag = await Tag.create(req.body);
        res.status(201).json(tag);
    }

    async list(req, res) {
        const tags = await Tag.findAll();
        res.status(200).json(tags);
    }

    async edit(req, res) {
        const tag = Tag.findByPk(req.params.id);
        if (!tag) {
            return res.status(404).json({ error: 'not found'});
        }

        await tag.update(red.body);
        res.status(200).json(tag);
    }

    async delete(req, res) {
        const tag = await Tag.findByPk(req.params.id);
        if (!tag) {
            return res.status(404).json({ error: 'not found'});
        }

        await tag.destroy();
        res.status(200).json({ message: 'deleted'});
    }
}

module.exports = new TagController();